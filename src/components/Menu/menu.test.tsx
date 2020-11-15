import React from 'react';
import { fireEvent, render, RenderResult } from '@testing-library/react';
import Menu, { MenuProps } from './menu';
import MenuItem from './menuItem';

const testPorps: MenuProps = {
  defaultIndex: 0,
  onSelect: jest.fn(),
  className: 'test'
};

const testVerProps: MenuProps = {
  defaultIndex: 0,
  mode: 'vertical'
};

const generateMenu = (props: MenuProps) => {
  return (
    <Menu {...props}>
      <MenuItem index={0}>active</MenuItem>
      <MenuItem disabled index={1}>
        disabled
      </MenuItem>
      <MenuItem index={2}>xyz</MenuItem>
    </Menu>
  );
};
let wrapper: RenderResult,
  menuElement: HTMLElement,
  activeElement: HTMLElement,
  disabledElement: HTMLElement;
describe('test Menu and MenuItem component', () => {
  beforeEach(() => {
    wrapper = render(generateMenu(testPorps));
  });
  it('should render correct Menu and MenuItem based on default props', () => {});
  it('click items should change active and call the right callback', () => {});
  it('should render vertical model when mode is set to vertical', () => {});
});
