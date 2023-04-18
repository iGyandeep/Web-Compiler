

import Editor from "./Editor";

import { Box, styled } from '@mui/material';

import { useContext } from "react";
import { DataContext } from "../context/DataProvider";

const Align = styled(Box)`
    display: flex;
`

const CodeArea = () => {

    const { html, setHtml, css, setCss, js, setJs } = useContext(DataContext);

    return (
        <Align>
            <Editor 
                codeLanguage = "HTML"
                icon = "/"
                color = "#FC260A"
                value = {html}
                onChange = {setHtml}
            />
            <Editor 
                codeLanguage = "CSS"
                icon = "*"
                color = "#FCF921"
                value = {css}
                onChange = {setCss}
            />
            <Editor 
                codeLanguage = "JavaScript"
                icon = "<>"
                color = "#21FC15"
                value = {js}
                onChange = {setJs}
            />
        </Align>
    )
}

export default CodeArea;