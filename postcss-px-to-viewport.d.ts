
/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-09-03 16:09:34
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-09-03 16:15:38
 * @FilePath: /mangement/postcss-px-to-viewport.d.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

declare module 'postcss-px-to-viewport' {

    type Options = {
        unitToConvert: 'px' | 'rem' | 'cm' | 'em',
        viewportWidth: number,
        viewportHeight: number, // not now used; TODO: need for different units and math for different properties
        unitPrecision: number,
        viewportUnit: string,
        fontViewportUnit: string,  // vmin is more suitable.
        selectorBlackList: string[],
        propList: string[],
        minPixelValue: number,
        mediaQuery: boolean,
        replace: boolean,
        landscape: boolean,
        landscapeUnit: string,
        landscapeWidth: number
    }

    export default function (options: Partial<Options>): any
}