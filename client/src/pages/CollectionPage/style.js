import { Checkbox, Collapse } from 'antd';
import styled from 'styled-components';

export const StyledCheckbox = styled(Checkbox)`
.ant-checkbox-checked .ant-checkbox-inner {
  background-color: rgb(196, 18, 63);
  border-color: rgb(196, 18, 63);
}
`;

export const StyledCollapse = styled(Collapse)`
background-color: #fff;
border-radius: 2px;
border-color: #fff;
box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
& .ant-collapse-header-text {
  font-size: 16px;
  font-weight: 600;
}
`;