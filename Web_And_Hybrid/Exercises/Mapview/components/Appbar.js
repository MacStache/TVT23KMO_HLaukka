import { Appbar } from "react-native-paper";

export default function MainAppbar(props) {
    return (
        <Appbar.Header style={{backgroundColor: props.backgroundColor}}>
            <Appbar.BackAction onpress={() => {}} />
            <Appbar.Content title={props.title} />
            <Appbar.Action icon={props.icon} onPress={props.getUserPosition} />
        </Appbar.Header>
    )
}