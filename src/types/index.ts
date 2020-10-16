
export interface BoxProps {
  children?: React.ReactNode
  buttonBoxStyle?: React.CSSProperties
}

export interface ArrowButtonProps {
  arrowType: string
  onClick: (event: React.FormEvent<HTMLButtonElement>) => void
}

export interface StatusDropdownProps {
  onClick: (event: React.FormEvent<HTMLButtonElement>) => void
}

export interface MessageFormProps {
  children?: React.ReactNode
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

export interface Message {
  user: string
  text: string
}

export interface MessageListProps {
  messageList: Message[]
}

export interface MessageInputProps {
  message?: string
  onChange:(event: React.ChangeEvent<HTMLTextAreaElement>) => void 
}

export interface StatusDropdownProps {
  onClick: (event: React.FormEvent<HTMLButtonElement>) => void
}

export interface FormProps {
  children?: React.ReactNode
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}