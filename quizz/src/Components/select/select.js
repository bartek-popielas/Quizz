import {StyledForm, StyledSexInput, StyledLabel, StyledDiv, StyledInput} from './styles'
import {Fragment, useContext, useState} from "react";

export default function Select() {

    return (
        <Fragment>
            <StyledForm>
                <StyledLabel>Płeć: </StyledLabel>
                <StyledDiv>
                    <StyledSexInput id="male" name="male" value="male" />
                    <StyledSexInput id="female" name="female" value="female"/>
                </StyledDiv>
                <StyledLabel>Imię: </StyledLabel>
                    <StyledInput id="name" placeholder="Mówmy sobie po imieniu"/>
                <StyledLabel>Wiek: </StyledLabel>
                        <StyledInput type="number" id="age" placeholder="Ile masz lat?"/>
            </StyledForm>
        </Fragment>

    )
}
