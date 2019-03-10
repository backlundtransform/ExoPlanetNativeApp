import * as React from 'react'
import { Picker } from 'native-base'

interface SearchPickerProp {
    title: string
    statekey: string
    value: any
    onValueChange: (value: any, key: any) => void
    searcharray: any
}
export default class SearchPicker extends React.Component<
    SearchPickerProp,
    any
> {
    render() {
        const {
            onValueChange,
            value,
            searcharray,
            statekey,
            title,
        } = this.props

        return (
            <React.Fragment>
                <Picker
                    mode="dropdown"
                    selectedValue={value}
                    onValueChange={value => onValueChange(value, statekey)}
                >
                    <Picker.Item
                        label={title}
                        key={`${statekey} -index`}
                        value={''}
                    />
                    {searcharray.map(p => (
                        <Picker.Item
                            label={p}
                            key={`${statekey} ${p}`}
                            value={p}
                        />
                    ))}
                </Picker>
            </React.Fragment>
        )
    }
}
