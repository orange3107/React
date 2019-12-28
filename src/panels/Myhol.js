import React from 'react';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import CellButton from '@vkontakte/vkui/dist/components/CellButton/CellButton';
import View from '@vkontakte/vkui/dist/components/View/View';
import FormLayout from '@vkontakte/vkui/dist/components/FormLayout/FormLayout';
import PropTypes from 'prop-types';
import { platform, IOS, Checkbox } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import HeaderButton from '@vkontakte/vkui/dist/components/HeaderButton/HeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';



const osName = platform();
const hol = [1,2,3,4];
const Myhol = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<HeaderButton onClick={props.go} data-to="home">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</HeaderButton>}
		>
			Мой холодильник 
		</PanelHeader>
		

        <View activePanel="panel" header={false}>
  <Panel id="panel">
      
  <FormLayout>
	
        <Checkbox>
			{hol[1]}
		</Checkbox>
        <Checkbox>
			{hol[0]}
		</Checkbox>
        
      
      
        </FormLayout>
    
  </Panel>
</View>



	</Panel>
);


export default Myhol;