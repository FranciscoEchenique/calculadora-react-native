import { BackGroundColor } from '../components/Button';

export interface rowObj{
    content: string,
    operation: () => void,
    color: BackGroundColor
}

export const firstRow: rowObj[] = [
    {content: 'C', operation: () => {}, color: BackGroundColor.lightGray},
    {content: '+/-', operation: () => {}, color: BackGroundColor.lightGray},
    {content: '%', operation: () => {}, color: BackGroundColor.lightGray},
    {content: '÷', operation: () => {}, color: BackGroundColor.orange},
];

export const secondRow: rowObj[] = [
    {content: '7', operation: () => {}, color: BackGroundColor.gray},
    {content: '8', operation: () => {}, color: BackGroundColor.gray},
    {content: '9', operation: () => {}, color: BackGroundColor.gray},
    {content: 'X', operation: () => {}, color: BackGroundColor.orange},
];

export const thirdRow: rowObj[] = [
    {content: '4', operation: () => {}, color: BackGroundColor.gray},
    {content: '5', operation: () => {}, color: BackGroundColor.gray},
    {content: '6', operation: () => {}, color: BackGroundColor.gray},
    {content: '-', operation: () => {}, color: BackGroundColor.orange},
];
export const fourthRow: rowObj[] = [
    {content: '1', operation: () => {}, color: BackGroundColor.gray},
    {content: '2', operation: () => {}, color: BackGroundColor.gray},
    {content: '3', operation: () => {}, color: BackGroundColor.gray},
    {content: '+', operation: () => {}, color: BackGroundColor.orange},
];

export const fifthRow: rowObj[] = [
    {content: ',', operation: () => {}, color: BackGroundColor.gray},
    {content: '=', operation: () => {}, color: BackGroundColor.orange},
];
