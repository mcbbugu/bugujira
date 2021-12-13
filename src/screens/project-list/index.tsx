import {SearchPannel} from "./search-panel";
import {List} from "./list";
import {useState, useEffect} from "react";
import { cleanObject, useDebounce } from "../../utils";
import * as qs from "qs";
import React from "react";
import { useHttp } from "../../utils/http";
import styled from "@emotion/styled";

const apiUrl = process.env.REACT_APP_URL
export const ProjectListScreen = () => {
    const [users, setUsers] = useState([])
    const [param, setParam] = useState({
        name: '',
        personId: ''
    })

    const debounceParam = useDebounce(param, 500)

    const [list, setList] = useState([])
    const client = useHttp()

    useEffect(() => {
        client('projects', {data: cleanObject(debounceParam)}).then(setList)
    }, [debounceParam])

    useMount(() => {
        client('users').then(setUsers)
    })

    return <Container>
        <h1>项目列表</h1>
        <SearchPannel users={users} param={param} setParam={setParam}/>
        <List users={users} list={list}/>
    </Container>
};

export const useMount = (callback: () => void) => {
    useEffect(() => {
        callback()
    }, [])
}

const Container = styled.div`
  padding: 3.2rem
`