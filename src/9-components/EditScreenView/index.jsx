import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'antd';
import Tree from '../Tree';
import TableEdit from '../TableEdit';

function compareByKey(key) {
  return function compare(o1, o2) {
    if (o1[key] < o2[key]) {
      return -1;
    }
    if (o1[key] > o2[key]) {
      return 1;
    }
    return 0;
  };
}

function getAllChildren(arIds, objectsById) {
  if (!arIds) {
    return [];
  }
  if (Array.isArray(arIds) && arIds.length === 0) {
    return [];
  }

  const res = arIds.map(id => Object.assign({}, objectsById[id]));
  res.sort(compareByKey('name'));
  for (let i = 0; i < arIds.length; i += 1) {
    const obj = res[i];
    obj.childrenObjs = getAllChildren(obj.children, objectsById);
  }

  return res;
}

const getTree = (objectsById) => {
  const list = Object.keys(objectsById).map(key => objectsById[key]);
  let listRoot = list.filter(el => !el.parentId);

  listRoot.sort(compareByKey('name'));
  listRoot = listRoot.map(item => Object.assign({}, item));
  for (let i = 0; i < listRoot.length; i += 1) {
    listRoot[i].childrenObjs = getAllChildren(
      listRoot[i].children,
      objectsById,
    );
  }

  return listRoot;
};

const styles = {
  leftright: {
    display: 'flex',
  },
  left: {
    flex: 3,
  },
  right: {
    flex: 7,
  },
  controls: {
    display: 'flex',
    justifyContent: 'center',
  },
};


class EditScreenView extends React.PureComponent {
  constructor(props) {
    super(props);
    const { id, objectsById } = this.props;
    // console.log('before');
    // console.log(objectsById);
    let selectedNodes = [];
    let list = [];
    this.objectsTree = [];
    if (Object.keys(objectsById).length > 0) {
      this.objectsTree = getTree(objectsById);

      selectedNodes = id ? [id] : [];
      list = id ? [objectsById[id]] : [];
    }
    // console.log('after');
    this.state = {
      selectedNodes,
      list,
    };
    if (!(Object.keys(objectsById).length > 0) || !id) {
      props.onCancel();
    }
  }

  onSaveForm = () => {
    const { onSave } = this.props;
    const { list } = this.state;
    onSave(list);
  };

  render() {
    const { onCancel } = this.props;
    const { list, selectedNodes } = this.state;
    return (
      <div>
        <h1>Editing Objects</h1>
        <div style={styles.leftright}>
          <div style={styles.left}>
            <Tree
              objectsTree={this.objectsTree}
              selectedNodes={selectedNodes}
            />
          </div>
          <div style={styles.right}>
            <div>
              <TableEdit objectsList={list} />
            </div>
            <div style={styles.controls}>
              <Button onClick={onCancel}>Cancel</Button>
              <Button type="primary" onClick={this.onSaveForm}>
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
EditScreenView.propTypes = {
  id: PropTypes.string.isRequired,
  objectsById: PropTypes.shape().isRequired,
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default EditScreenView;
