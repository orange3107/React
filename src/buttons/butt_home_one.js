import React from 'react';
import className from 'classname'
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
const Button = ({

    children, onClick, className, disabled, active,

}) => {

const classes = className(
    `btn`,
    className,
    {active}
);
return(
    <button
        className = {classes}
        disabled = {disabled}
        onClick = {onClick}
>{children}</button>
);
};
Button.protoType = {
    children: ProtoTypes.node,
    onClick: ProtoTypes.func,
    className: ProtoTypes.string,
    disabled: ProtoTypes.bool,
    active: ProtoTypes.bool,

}
Button.defaultProps = {
    children: 'Default button',
    onClick: () => {},
    className: '',
    disabled: false,
    active: false,
}

export default Button;