import React from 'react';
import {View} from 'react-native';
import {Text} from '../customComponents/Components.js';
import mieso from '../../constants/data/mieso';
import preparaty from '../../constants/data/preparaty';
import ryby from '../../constants/data/ryby';
import suplementy from '../../constants/data/suplementy';
import tluszcze from '../../constants/data/tluszcze';
import warzywa from '../../constants/data/warzywa';
import StandardInput from './StandardInput.js'; 

const List = ()=>{
    return(
       <View>
           <Text text='Mięso' fontFamily='product-sans-bold' />
            <StandardInput
            data={mieso}
            typ='mieso'
            />
            <StandardInput
            data={mieso}
            typ='serce'
            />
            <StandardInput
            data={mieso}
            typ='podroby'
            />
            <StandardInput
            data={mieso}
            typ='zoladek'
            />
            <StandardInput
            data={mieso}
            typ='kosci'
            />
            <Text text='Gotowe preparaty' fontFamily='product-sans-bold' />
            <StandardInput
            data={preparaty}
            typ='preparaty'
            />
            <Text text='Suplementy naturalne - witamina A, witamina D' fontFamily='product-sans-bold' />
            <StandardInput
            data={suplementy}
            typ='Wit A'
            />
            <StandardInput
            data={ryby}
            typ='ryby'
            />
            <StandardInput
            data={suplementy}
            typ='Wit D'
            />
            <Text text='Suplementy naturalne - inne witaminy i minerały' fontFamily='product-sans-bold' />
            <StandardInput
            data={suplementy}
            typ='Jod'
            />
            <StandardInput
            data={suplementy}
            typ='Wit B'
            />
            <StandardInput
            data={suplementy}
            typ='Zelazo'
            />
            <StandardInput
            data={suplementy}
            typ='Wit E'
            />
            <Text text='Tłuszcz' fontFamily='product-sans-bold' />
            <StandardInput
            data={tluszcze}
            typ='tluszcze'
            />
            <Text text='Oleje rybne' fontFamily='product-sans-bold' />
            <StandardInput
            data={suplementy}
            typ='Olej'
            />
            <Text text='Wapno i fosfor' fontFamily='product-sans-bold' />
            <StandardInput
            data={suplementy}
            typ='Wapn/Fosfor'
            />
            <StandardInput
            data={suplementy}
            typ='Wapn'
            />
            <Text text='Sód' fontFamily='product-sans-bold' />
            <StandardInput
            data={suplementy}
            typ='Sod'
            />
            <Text text='Warzywa' fontFamily='product-sans-bold' />
            <StandardInput
            data={warzywa}
            typ='warzywa'
            />
       </View> 
    )
}

export default List;