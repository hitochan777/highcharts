/* *
 *
 *  (c) 2009-2023 Highsoft AS
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 *  Authors:
 *  - Karol Kolodziej
 *
 * */

/* *
 *
 *  Imports
 *
 * */

import DataConnector from './DataConnector';


/* *
 *
 *  Declarations
 *
 * */

/**
 * Options of the GoogleSheetsConnector.
 */
export interface HTMLTableConnectorOptions extends DataConnector.Options {
    /**
     * The id of the HTML table element to load or a reference to the HTML.
     */
    table: (string|HTMLElement);
}

/* *
 *
 *  Default Export
 *
 * */

export default HTMLTableConnectorOptions;
