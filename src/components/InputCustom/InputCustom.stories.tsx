import { faLock } from "@fortawesome/free-solid-svg-icons";
import { Meta, StoryObj } from "@storybook/react";
import { InputCustom } from './index';

const meta: Meta<typeof InputCustom> = {
    title: "components/InputCustom",
    component: InputCustom,
    tags: ['autodocs'],
    parameters: {
    layout:'centered'
}    
}

export default meta;
type Story = StoryObj<typeof InputCustom>;

export const Default: Story = {
    args: {
        id: 'user',
        label: 'Username',
        placeholder: 'You Username',
        type: 'text',        
    }
}

export const Required: Story = {
    args: {
        id: 'email',
        label: 'E-Mail',
        placeholder: 'You E-Mail',
        type: 'email',   
        required:true
    }
}

export const Icon: Story = {
    args: {
        id: 'password',
        icon: faLock,
        placeholder: 'You Password',
        type: 'password',
    }
}