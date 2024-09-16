import { Text } from 'react-native'
import React from 'react'

export default function Row(props) {
    return (
        <Text>{props.item.name}</Text>
    )
}