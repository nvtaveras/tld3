import { ChartMain } from '../core/ChartMain';
import Internal from './internal';
import InternalLine from '../internal-charts/internalLine';

/**
@private
Constructor subclass for Bar Chart.
*/
export class LineChart extends ChartMain {
  constructor() {
    super();
  }

  build() {
    Internal.selectElement(this);
    InternalLine.setXScale(this);
    InternalLine.setYScale(this);
    Internal.createSVGElement(this);
    Internal.createxAxis(this);
    Internal.buildXAxis(this);
    Internal.createyAxis(this);
    InternalLine.buildYAxis(this);
    InternalLine.buildLine(this);
    Internal.setAxisStyle(this, 'path', 'none', '#000', 'crispEdges');
    Internal.setAxisStyle(this, 'line', 'none', '#000', 'crispEdges');
    InternalLine.buildChartComponents(this);
    InternalLine.styleChart(this);
  }

  render() {
    // used for data updates?
    // need to think about how we are "rendering" upon instantiation and upon update
    // I think this render needs to be a customized update function depending on what attribute is being updated
  }

  /**
  @private
  @function Calls InternalLine to update the line on the chart
  @param {Object} context
    @description Chart object
  @returns {Object} context
    @description Chart object
  */

  updateChartComponents() {
    InternalLine.updateChartComponents(this);
  }

  /**
  @private
  @function Updates the chart's height on the element itself
  @param {Object} context
    @description Chart object
  @returns {Object} context
    @description Chart object
  */

  updateHeight() {
    Internal.updateSVGElement(this);
    Internal.setYscale(this, 'linear', 'number');
    Internal.updateYAxisScale(this);
    Internal.updateYAxis(this);
    Internal.updateXAxisPosition(this);
    InternalLine.buildLine(this);

    return this;
  }

  /**
  @private
  @function Updates the chart's margin on the element itself
  @param {Object} context
    @description Chart object
  @returns {Object} context
    @description Chart object
  */

  updateMargins() {
    this.updateHeight();
    this.updateWidth();

    return this;
  }

  /**
  @private
  @function Updates the chart's width on the element itself
  @param {Object} context
    @description Chart object
  @returns {Object} context
    @description Chart object
  */

  updateWidth() {
    Internal.updateSVGElement(this);
    // TODO: make scale type a chart properties
    InternalLine.setXScale(this);
    Internal.updateXAxisScale(this);
    Internal.updateXAxis(this);
    InternalLine.buildLine(this);

    return this;
  }


  /**
  @function Calls InternalLine function to update color of line on chart after initial render
  @param {Array} colors
    @description Array of colors to update the chart to
  */
  updateColors(colors) {
    InternalLine.updateColors(colors, this);
  }

}