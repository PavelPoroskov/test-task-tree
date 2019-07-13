import React from 'react';
import PropTypes from 'prop-types';
import { cloneDeep } from 'lodash-es';
import { Button } from 'antd';

import TreeCustomized from '../TreeCustomized';
import TableEdit from '../TableEdit';
import { sortBy } from '../../10-api';

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
  controlsBtn: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
  },
};

class EditScreenView extends React.PureComponent {
  constructor(props) {
    super(props);

    const { id, objectsById } = props;

    // const selectedIds = [`${id}`];
    // todo: check this in upper containers
    let selectedIds = [];
    if (id && Object.keys(objectsById).length > 0 && objectsById[id]) {
      selectedIds = [`${id}`];
    }

    // this.dataSource = cloneDeep(objectsById);
    this.dataSource = objectsById;
    this.dataEditing = {};
    // this.dataList = [];
    this.state = {
      // selectedIds,
      list: this.getList(selectedIds),
    };
    // todo: check this in upper containers
    if (!(id && Object.keys(objectsById).length > 0 && objectsById[id])) {
      props.onCancel();
    }
  }

  getList = (_selectedIds) => {
    // key in this.dataSource -- only items/ not groups
    const listFiltered = _selectedIds.filter(key => key in this.dataSource);

    const arKeys = Object.keys(this.dataEditing);
    for (let i = 0; i < arKeys.length; i += 1) {
      const key = arKeys[i];
      if (listFiltered.indexOf(key) === -1) {
        // console.log(`delete ${key}`);
        delete this.dataEditing[key];
      }
    }

    for (let i = 0; i < listFiltered.length; i += 1) {
      const key = listFiltered[i];
      // if (arKeys.indexOf(key) === -1 && (key in this.dataSource)) {
      if (!(key in this.dataEditing)) {
        // console.log(`add ${key}`);
        this.dataEditing[key] = cloneDeep(this.dataSource[key]);
      }
    }

    const list = listFiltered.map(id => this.dataEditing[id]);
    list.sort(sortBy('name'));

    return list;
  }

  onSelect = (changedList) => {
    const list = this.getList(changedList);
    this.setState({
      list,
    });
  }

  onSaveForm = () => {
    const { onSave } = this.props;
    // todo: validation if in editing
    const { list } = this.state;
    onSave(list);
  };

  render() {
    const { id, objectsTree, onCancel } = this.props;
    const { list } = this.state;

    // todo: check this in upper containers
    if (!objectsTree.length) {
      return null;
    }

    return (
      <div>
        <h1>Editing Objects</h1>
        <div style={styles.leftright}>
          <div style={styles.left}>
            <TreeCustomized
              objectsTree={objectsTree}
              id={id}
              onSelect={this.onSelect}
            />
          </div>
          <div style={styles.right}>
            <div>
              <TableEdit objectsList={list} />
            </div>
            <div style={styles.controls}>
              <div style={styles.controlsBtn}>
                <Button onClick={onCancel}>Cancel</Button>
              </div>
              <div style={styles.controlsBtn}>
                <Button type="primary" onClick={this.onSaveForm}>
                  Save
                </Button>
              </div>
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
  objectsTree: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default EditScreenView;
