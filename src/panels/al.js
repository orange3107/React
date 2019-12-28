
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

function calculateWinner(name){
var mysql = require('mysql');
 console.log('Get connection ...');
 var conn = mysql.createConnection({
  database: 'ss',
  host: "localhost",
  user: "Ilkar",
  password: "Ilkar"
});
 
conn.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

const sql = `SELECT * FROM hh`;
 
conn.query(sql, function(err, results) {
    if(err) console.log(err);
    console.log(results);
    const a = results; 
});

     let name = [a.length];
      for(let i=0; i < a.length; i++){
     name[i] = a[i].name;
     return name[i];
    
      }
  
      
 
conn.end();
return null;

    }






const osName = platform();
const al = [1,2,3,4];
const Alerg = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<HeaderButton onClick={props.go} data-to="home">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</HeaderButton>}
		>
			У меня есть аллергия
		</PanelHeader>
		

        <View activePanel="panel" header={false}>
  <Panel id="panel">
      
  <FormLayout>
	<Checkbox>
			{name[0]}
		</Checkbox>
        <Checkbox>
			{name[1]}
		</Checkbox>
        
      
      
        </FormLayout>
    
  </Panel>
</View>



	</Panel>
);


export default Alerg;
