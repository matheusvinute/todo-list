import styled from 'styled-components';

export const Container = styled.section`
    background: #ccc;
    border-radius: 1rem;

    margin-top: -8rem;
    padding: 70px 60px;

    filter: drop-shadow(0px 24px 64px rgba(0, 0, 0, 0.6));

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        

        h2 {
            font-size: 2rem;
        }

        div {
            display: flex;
            gap: 1rem;
            align-items: center;

            input {
                flex: 1;
                border: 0;
                padding: 12px 24px;

                border-radius: 0.25rem;

            }

            button {
                font-weight: 600;
                border-radius: 0.25rem;
                border: 0;
                display: flex;
                align-items: center;
                justify-content: center;

                padding: 14px;

                transition: filter 0.2s;

                &:hover{
                    filter: brightness(0.9);
                }
            }
        }
    }

    main {
        margin-top: 3rem;

        ul {
            list-style: none;

            li {
                display: flex;
                align-items: center;
                justify-content: space-between;
                border-bottom: 1px solid #ebebeb;
                padding: 1rem 0;

                div {
                    display: flex;
                    align-items: center;
                    gap: 14px;
                    outline: 0;

                    p {
                        font-size: 1rem;
                        color: #111;
                    }

                    &.completed {
                        p {
                            text-decoration: line-through;
                            opacity: 0.6;
                        }
                    }

                    .checkbox-container{
                        display: block;
                        position: relative;
                        padding-left: 14px;
                        margin-bottom: 18px;

                        input{
                            position: absolute;
                            opacity: 0;
                            cursor: pointer;
                            height: 0;
                            width: 0;

                            &:checked {
                                & ~ .checkmark {
                                    background: #111;
                                }

                                & ~ .checkmark:after {
                                    display: block;
                                }
                            }
                        }

                        .checkmark {
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 16px;
                            height: 16px;
                            background-color: #fff;
                            border-radius: 2px;

                            &:after {
                                content: "";
                                position: absolute;
                                display: none;
                                left: 6px;
                                top: 3px;
                                width: 3px;
                                height: 6px;
                                border: solid white;
                                border-width: 0 2px 2px 0;
                                transform: rotate(45deg);
                            }
                        }
                    }
                }

                button {
                    background: transparent;
                    border: 0;

                    &:hover {
                        svg {
                            filter: brightness(0.5)
                        }
                    }
                }
            }
        }
    }
`