export interface IDotPref {
    color: string,
    defaultColor: string
}

export interface ISliderConfig {
    header: string,
    header2?: string,
    content: string,
    dotPeref: IDotPref,
    default?: boolean
}

export enum IPopupCpmmands {
    close = 'close',
    next = 'next',
    back = 'back',
    showTearms = 'showTearms',
    showPrivacyPolicy = 'showPrivacyPolicy',
    submit = 'submit',
    reviewBid = 'reviewBid'
}

export interface IPopupConfigs {
    header: string,
    contentHeader: string,
    content: any,
    nxtButton: boolean,
    bckButton: boolean,
    customContents?: string,
    contentname?: string,
    customFooterButton?: string;
    showFooter: boolean;
}

export interface ICard {
    id?: string,
    icon: string,
    title: string,
    info: string,
    infoIcon: string,
    background?: string
}

export interface IInvites {
    name: string,
    email: string,
    status: string
}

export enum KeyLockerViews {
    entries = 'entries',
    cashSpent = 'cashSpent',
    invites = 'invites',
    bidPlaced = 'bidPlaced',
    contractWon = 'contractWon'
}