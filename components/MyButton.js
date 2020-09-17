import React from 'react'
import { Button } from 'react-native'

export default () => {
    return <Button>
        title={props.title}
        color={props.color}
        onPress={() => { props.onChangeColor(props.color0) }}
    </Button>
}