import * as TimeAnalyzerLib from './index';

/**
 * used for umd build
 */ 

if (typeof globalThis === 'object') {
  globalThis.TimeAnalyzerLib = TimeAnalyzerLib;
} else if (typeof window === 'object') {
  (window as any).TimeAnalyzerLib = TimeAnalyzerLib;
}
