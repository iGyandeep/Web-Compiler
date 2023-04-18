
import { Box, styled } from '@mui/material';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';

import { Controlled as ControlledEditor } from 'react-codemirror2';

import { useState } from 'react';


import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';


import '../App.css';
import { alignProperty } from '@mui/material/styles/cssUtils';

const Container = styled(Box)`
    flex-grow: 1;
    flex-basic: 0;
    display: flex;
    flex-direction: column;
    ${'' /* padding: 3px 1px 0px 4px;
    padding-right: 3px; */}

`


const Heading_1 = styled(Box)`
    background: #3DBAF2;
    display: flex;
    padding: 9px;
`;

const Heading_2 = styled(Box)`
    display: flex;
    background: #3DBAF2;
    color: #fff;
    justify-content: space-between;
    font-weight: 700;
`

const Editor = ({ codeLanguage, icon, color, value, onChange }) => {

    const [open, setOpen] = useState(true);

    const handleChange = (editor, data, value) => {
        onChange(value);
    }

    return(
        <Container style = { open ? null : { flexGrow: 0}}>            
                <Heading_2>
                    <Heading_1>
                        <Box 
                        component='span'
                        style={{
                            background: color,
                            height: 20,
                            width: 20,
                            display: 'flex',
                            placeContent: 'center',
                            borderRadius: 5,
                            marginRight: 5,
                            paddingBottom: 2
                        }}>{icon}</Box>
                        {codeLanguage}
                    </Heading_1>
                    <CloseFullscreenIcon 
                        fontSize='small'
                        style = {{alignSelf: 'center'}}
                        onClick = {() => setOpen(perviousState => !perviousState)}
                    />
                </Heading_2>
                <ControlledEditor 
                    className='controlled-editor'
                    value={value}
                    onBeforeChange = {handleChange}
                    options={{
                        theme: 'material',
                        lineNumbers: true
                    }}
                />
        </Container>
    )
}

export default Editor;