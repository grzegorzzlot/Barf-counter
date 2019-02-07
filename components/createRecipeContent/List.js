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
            category='mieso'
            />
            <StandardInput
            data={mieso}
            typ='serce'
            category='mieso'
            />
            <StandardInput
            data={mieso}
            typ='podroby'
            category='mieso'
            />
            <StandardInput
            data={mieso}
            typ='zoladek'
            category='mieso'
            />
            <StandardInput
            data={mieso}
            typ='kosci'
            category='mieso'
            />
            <Text text='Gotowe preparaty' fontFamily='product-sans-bold' />
            <StandardInput
            data={preparaty}
            typ='preparaty'
            category='preparaty'
            />
            <Text text='Suplementy naturalne - witamina A, witamina D' fontFamily='product-sans-bold' />
            <StandardInput
            data={suplementy}
            typ='Wit A'
            category='suplementy'
            />
            <StandardInput
            data={ryby}
            typ='ryby'
            category='ryby'
            />
            <StandardInput
            data={suplementy}
            typ='Wit D'
            category='suplementy'
            />
            <Text text='Suplementy naturalne - inne witaminy i minerały' fontFamily='product-sans-bold' />
            <StandardInput
            data={suplementy}
            typ='Jod'
            category='suplementy'
            />
            <StandardInput
            data={suplementy}
            typ='Wit B'
            category='suplementy'
            />
            <StandardInput
            data={suplementy}
            typ='Zelazo'
            category='suplementy'
            />
            <StandardInput
            data={suplementy}
            typ='Wit E'
            category='suplementy'
            />
            <Text text='Tłuszcz' fontFamily='product-sans-bold' />
            <StandardInput
            data={tluszcze}
            typ='tluszcze'
            category='tluszcze'
            />
            <Text text='Oleje rybne' fontFamily='product-sans-bold' />
            <StandardInput
            data={suplementy}
            typ='Olej'
            category='suplementy'
            />
            <Text text='Wapno i fosfor' fontFamily='product-sans-bold' />
            <StandardInput
            data={suplementy}
            typ='Wapn/Fosfor'
            category='suplementy'
            />
            <StandardInput
            data={suplementy}
            typ='Wapn'
            category='suplementy'
            />
            <Text text='Sód' fontFamily='product-sans-bold' />
            <StandardInput
            data={suplementy}
            typ='Sod'
            category='suplementy'
            />
            <Text text='Warzywa' fontFamily='product-sans-bold' />
            <StandardInput
            data={warzywa}
            typ='warzywa'
            category='warzywa'
            />
       </View> 
    )
}

export default List;