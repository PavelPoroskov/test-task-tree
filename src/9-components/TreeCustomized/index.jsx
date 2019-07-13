import React from 'react';
import PropTypes from 'prop-types';
import { Tree } from 'antd';

const { TreeNode } = Tree;

function buildNode(node) {
  const { name, id, children } = node;
  let component = null;
  if (!children || (Array.isArray(children) && children.length === 0)) {
    component = <TreeNode title={name} key={id} />;
  } else {
    component = (
      <TreeNode title={name} key={id}>
        {children.map(nodeChild => buildNode(nodeChild))}
      </TreeNode>
    );
  }
  return component;
}
function buidTree(nodes) {
  return nodes.map(node => buildNode(node));
}

class TreeCustom extends React.PureComponent {
  constructor(props) {
    super(props);

    this.Nodes = buidTree(props.objectsTree);
    this.defaultCheckedKeys = [`${props.id}`];
    this.defaultExpandedKeys = [`${props.id}`];
    // this.defaultCheckedKeys = [];
    // this.defaultExpandedKeys = [];
    // if (props.objectsTree.length) {
    //   this.defaultCheckedKeys = [`${props.id}`];
    //   this.defaultExpandedKeys = [`${props.id}`];
    // }
  }

  render() {
    const { onSelect } = this.props;

    return (
      <Tree
        checkable
        defaultCheckedKeys={this.defaultCheckedKeys}
        defaultExpandedKeys={this.defaultExpandedKeys}
        onCheck={onSelect}
      >
        {this.Nodes}
      </Tree>
    );
  }
}
TreeCustom.propTypes = {
  objectsTree: PropTypes.arrayOf(PropTypes.object).isRequired,
  id: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default TreeCustom;
