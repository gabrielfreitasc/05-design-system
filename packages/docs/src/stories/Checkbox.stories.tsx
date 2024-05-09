import type {StoryObj, Meta} from "@storybook/react"
import { Box, Text, Checkbox, CheckboxProps } from "@ignite-ui/react"

export default {
    title: "Form/Checkbox",
    component: Checkbox,
    args: {},
    decorators: [
        (Story) => {
            return (
                <Box as="label" css={{ display: "flex", flexDirection: 'row' }}>
                    {Story()}
                    <Text size="sm" css={{ marginLeft: '12px' }}>Accept terms of use</Text>
                </Box>
            )
        }
    ],
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}
