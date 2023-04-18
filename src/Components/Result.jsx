import { useContext } from 'react';

import { Box, styled } from '@mui/material';

import { DataContext } from '../context/DataProvider';

const Result = () => {

    const { html, css, js } = useContext(DataContext);

    const sourceCode = `
        <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
        </html>
    `
    return (
        <Box>
            <iframe 
                srcDoc={sourceCode}
                title = "Output"
                sandbox='allow-scripts'
                frameBorder={0}
                width = "100%"
                height = "100%"
            ></iframe>
        </Box>
    )
}


export default Result;