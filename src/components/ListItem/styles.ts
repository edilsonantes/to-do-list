import styled from 'styled-components'

type ContainerProps = {
    done: boolean;
}

export const Container = styled.div(({done}: ContainerProps)=>(
    `
        diplay: flex;
        background-color: #20212C;
        padding: 10px;
        border-radius: 10px;
        margin-bottom: 10px;
        align-items: center;

        input {
            width: 1.56rem;
            height: 1.56rem;
            margin-right: 5px;
        }
        
        label {
            color: #CCC;
            text-decoration: ${done ? 'line-through' : 'initial'};
        }
    `
))