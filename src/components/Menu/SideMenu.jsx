import React from 'react';
import PropTypes from 'prop-types';
import AddIcon from '@material-ui/icons/NoteAdd';
import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';
import NavDrawer from './NavDrawer';
import NavListItem from './NavListItem';

const SideMenu = ({ titleElement }) => {
  return (
    <>
      <NavDrawer top={titleElement}>
        <List component="nav">
          <NavListItem label="Add Note" icon={<AddIcon />} />
          {/* <NavListItem label="Generate Note" icon={<GenerateIcon />} />
          <Divider />
          <NavListItem label="Save All Notes" icon={<SaveIcon />} />
          <NavListItem label="Load Notes" icon={<LoadIcon />} /> */}
        </List>
      </NavDrawer>
    </>
  );
};

export default SideMenu;

SideMenu.propTypes = {
  titleElement: PropTypes.element.isRequired,
};
