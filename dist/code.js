"use strict";
// スタイル名のマッピング
const lightSchemeMapping = {
    primary: 'M3/sys/light/primary',
    surfaceTint: 'M3/sys/light/surface-tint',
    onPrimary: 'M3/sys/light/on-primary',
    primaryContainer: 'M3/sys/light/primary-container',
    onPrimaryContainer: 'M3/sys/light/on-primary-container',
    secondary: 'M3/sys/light/secondary',
    onSecondary: 'M3/sys/light/on-secondary',
    secondaryContainer: 'M3/sys/light/secondary-container',
    onSecondaryContainer: 'M3/sys/light/on-secondary-container',
    tertiary: 'M3/sys/light/tertiary',
    onTertiary: 'M3/sys/light/on-tertiary',
    tertiaryContainer: 'M3/sys/light/tertiary-container',
    onTertiaryContainer: 'M3/sys/light/on-tertiary-container',
    error: 'M3/sys/light/error',
    onError: 'M3/sys/light/on-error',
    errorContainer: 'M3/sys/light/error-container',
    onErrorContainer: 'M3/sys/light/on-error-container',
    background: 'M3/sys/light/background',
    onBackground: 'M3/sys/light/on-background',
    surface: 'M3/sys/light/surface',
    onSurface: 'M3/sys/light/on-surface',
    surfaceVariant: 'M3/sys/light/surface-variant',
    onSurfaceVariant: 'M3/sys/light/on-surface-variant',
    outline: 'M3/sys/light/outline',
    outlineVariant: 'M3/sys/light/outline-variant',
    shadow: 'M3/sys/light/shadow',
    scrim: 'M3/sys/light/scrim',
    inverseSurface: 'M3/sys/light/inverse-surface',
    inverseOnSurface: 'M3/sys/light/inverse-on-surface',
    inversePrimary: 'M3/sys/light/inverse-primary',
    primaryFixed: 'M3/sys/light/primary-fixed',
    onPrimaryFixed: 'M3/sys/light/on-primary-fixed',
    primaryFixedDim: 'M3/sys/light/primary-fixed-dim',
    onPrimaryFixedVariant: 'M3/sys/light/on-primary-fixed-variant',
    secondaryFixed: 'M3/sys/light/secondary-fixed',
    onSecondaryFixed: 'M3/sys/light/on-secondary-fixed',
    secondaryFixedDim: 'M3/sys/light/secondary-fixed-dim',
    onSecondaryFixedVariant: 'M3/sys/light/on-secondary-fixed-variant',
    tertiaryFixed: 'M3/sys/light/tertiary-fixed',
    onTertiaryFixed: 'M3/sys/light/on-tertiary-fixed',
    tertiaryFixedDim: 'M3/sys/light/tertiary-fixed-dim',
    onTertiaryFixedVariant: 'M3/sys/light/on-tertiary-fixed-variant',
    surfaceDim: 'M3/sys/light/surface-dim',
    surfaceBright: 'M3/sys/light/surface-bright',
    surfaceContainerLowest: 'M3/sys/light/surface-container-lowest',
    surfaceContainerLow: 'M3/sys/light/surface-container-low',
    surfaceContainer: 'M3/sys/light/surface-container',
    surfaceContainerHigh: 'M3/sys/light/surface-container-high',
    surfaceContainerHighest: 'M3/sys/light/surface-container-highest'
};
// Dartコード用のスタイルマッピング
const dartStyleMapping = {
    'primary': 'primary',
    'on-primary': 'onPrimary',
    'primary-container': 'primaryContainer',
    'on-primary-container': 'onPrimaryContainer',
    'secondary': 'secondary',
    'on-secondary': 'onSecondary',
    'secondary-container': 'secondaryContainer',
    'on-secondary-container': 'onSecondaryContainer',
    'tertiary': 'tertiary',
    'on-tertiary': 'onTertiary',
    'tertiary-container': 'tertiaryContainer',
    'on-tertiary-container': 'onTertiaryContainer',
    'error': 'error',
    'on-error': 'onError',
    'error-container': 'errorContainer',
    'on-error-container': 'onErrorContainer',
    'background': 'background',
    'on-background': 'onBackground',
    'surface': 'surface',
    'on-surface': 'onSurface',
    'surface-variant': 'surfaceVariant',
    'on-surface-variant': 'onSurfaceVariant',
    'outline': 'outline',
    'outline-variant': 'outlineVariant',
    'shadow': 'shadow',
    'scrim': 'scrim',
    'inverse-surface': 'inverseSurface',
    'inverse-on-surface': 'onInverseSurface',
    'inverse-primary': 'inversePrimary',
    'surface-tint': 'surfaceTint',
    'primary-fixed': 'primaryFixed',
    'on-primary-fixed': 'onPrimaryFixed',
    'primary-fixed-dim': 'primaryFixedDim',
    'on-primary-fixed-variant': 'onPrimaryFixedVariant',
    'secondary-fixed': 'secondaryFixed',
    'on-secondary-fixed': 'onSecondaryFixed',
    'secondary-fixed-dim': 'secondaryFixedDim',
    'on-secondary-fixed-variant': 'onSecondaryFixedVariant',
    'tertiary-fixed': 'tertiaryFixed',
    'on-tertiary-fixed': 'onTertiaryFixed',
    'tertiary-fixed-dim': 'tertiaryFixedDim',
    'on-tertiary-fixed-variant': 'onTertiaryFixedVariant',
    'surface-dim': 'surfaceDim',
    'surface-bright': 'surfaceBright',
    'surface-container-lowest': 'surfaceContainerLowest',
    'surface-container-low': 'surfaceContainerLow',
    'surface-container': 'surfaceContainer',
    'surface-container-high': 'surfaceContainerHigh',
    'surface-container-highest': 'surfaceContainerHighest'
};
// RGBをJSONのHex値に変換
function rgbToHexJson(r, g, b) {
    const toHex = (n) => {
        const hex = Math.round(n * 255).toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    };
    return '#' + toHex(r) + toHex(g) + toHex(b);
}
// RGBをDartのColor値に変換
function rgbToHexDart(r, g, b) {
    const toHex = (n) => {
        const hex = Math.round(n * 255).toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    };
    return `0xFF${toHex(r)}${toHex(g)}${toHex(b)}`;
}
// カラー値の取得
function getColorByStyleName(styles, targetName, isDart = false) {
    var _a;
    const style = styles.find(s => s.name === targetName);
    if (style && ((_a = style.paints[0]) === null || _a === void 0 ? void 0 : _a.type) === 'SOLID') {
        const paint = style.paints[0];
        return isDart ?
            rgbToHexDart(paint.color.r, paint.color.g, paint.color.b) :
            rgbToHexJson(paint.color.r, paint.color.g, paint.color.b);
    }
    return isDart ? '0xFF000000' : '#000000';
}
figma.showUI(__html__, { width: 500, height: 600 });
figma.ui.onmessage = async (msg) => {
    console.log('Message received:', msg.type);
    const localStyles = figma.getLocalPaintStyles();
    if (msg.type === 'generate-json') {
        const primaryColor = getColorByStyleName(localStyles, 'M3/sys/light/primary');
        const colorExport = {
            description: "Material Theme JSON",
            seed: primaryColor,
            coreColors: {
                primary: getColorByStyleName(localStyles, 'M3/sys/light/primary'),
                secondary: getColorByStyleName(localStyles, 'M3/sys/light/secondary'),
                tertiary: getColorByStyleName(localStyles, 'M3/sys/light/tertiary'),
                error: getColorByStyleName(localStyles, 'M3/sys/light/error'),
                neutral: getColorByStyleName(localStyles, 'M3/ref/neutral/neutral40'),
                neutralVariant: getColorByStyleName(localStyles, 'M3/ref/neutral-variant/neutral-variant40')
            },
            extendedColors: [],
            schemes: {
                light: {}
            }
        };
        Object.entries(lightSchemeMapping).forEach(([key, styleName]) => {
            colorExport.schemes.light[key] = getColorByStyleName(localStyles, styleName);
        });
        figma.ui.postMessage({
            type: 'response',
            data: JSON.stringify(colorExport, null, 2)
        });
    }
    else if (msg.type === 'generate-dart') {
        const m3Styles = localStyles.filter(style => style.name.startsWith('M3/sys/light/'));
        let dartCode = `import 'package:flutter/material.dart';\n\n`;
        dartCode += `const lightColorScheme = ColorScheme(\n`;
        dartCode += `  brightness: Brightness.light,\n`;
        const colorMap = new Map();
        // スタイルの処理
        m3Styles.forEach(style => {
            var _a;
            if (((_a = style.paints[0]) === null || _a === void 0 ? void 0 : _a.type) === 'SOLID') {
                const paint = style.paints[0];
                const styleName = style.name.replace('M3/sys/light/', '');
                const dartName = dartStyleMapping[styleName];
                if (dartName) {
                    const color = rgbToHexDart(paint.color.r, paint.color.g, paint.color.b);
                    colorMap.set(dartName, color);
                    console.log(`Mapped ${styleName} -> ${dartName}: ${color}`);
                }
            }
        });
        // ColorSchemeのプロパティを順番に出力
        Object.values(dartStyleMapping).forEach((prop, index, array) => {
            const color = colorMap.get(prop) || '0xFF000000';
            dartCode += `  ${prop}: Color(${color})`;
            dartCode += index < array.length - 1 ? ',\n' : '\n';
        });
        dartCode += `);\n`;
        figma.ui.postMessage({
            type: 'response',
            data: dartCode
        });
    }
};
