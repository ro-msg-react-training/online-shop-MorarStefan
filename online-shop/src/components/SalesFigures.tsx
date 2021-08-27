import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React, { useEffect } from "react";
import { compose, withState } from "recompose";
import CategorySale from "../interfaces/CategorySale";
import { SalesFiguresState } from "../interfaces/states/SalesFiguresState";
import { useAppDispatch, useAppSelector } from "../store";
import { readSales } from "../store/actions/salesFiguresActions";
import "../styles/styles.scss";
import { withSpinnerWhileLoading } from "./LoadingIndicator";

function SalesFigures() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(readSales());
  }, [dispatch]);

  const salesList: SalesFiguresState = useAppSelector(
    (state) => state.salesFigures
  );

  const enhance = compose(
    withState("loading", "setLoading", salesList.loading),
    withSpinnerWhileLoading
  );

  const Spinner = enhance(() => <div className="Spinner"></div>);

  const barCategories: Array<string> = [];
  const barData: Array<number> = [];
  const pieData: Array<{ name: string; y: number }> = [];
  salesList.sales.forEach((sale: CategorySale) => {
    barCategories.push(sale.category);
    barData.push(sale.sales);
    pieData.push({
      name: sale.category,
      y: sale.sales,
    });
  });

  const barOptions = {
    chart: {
      type: "bar",
    },
    title: {
      text: "Sales By Category",
    },
    xAxis: {
      categories: barCategories,
    },
    yAxis: {
      title: {
        text: "Sales figures",
      },
    },
    series: [
      {
        data: barData,
        name: "Sales",
        colorByPoint: true,
      },
    ],
  };

  const pieOptions = {
    chart: {
      type: "pie",
    },
    title: {
      text: undefined,
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: true,
          format: "<b>{point.name}</b>: {point.percentage:.1f} %",
        },
      },
    },
    series: [
      {
        data: pieData,
        name: "Sales",
        colorByPoint: true,
      },
    ],
  };

  return (
    <div>
      <div className="frame">
        <Spinner />
        {salesList.sales.length !== 0 ? (
          <div>
            <HighchartsReact highcharts={Highcharts} options={barOptions} />
            <HighchartsReact highcharts={Highcharts} options={pieOptions} />
          </div>
        ) : (
          <div></div>
        )}
        {salesList.error && !salesList.loading ? (
          <div>Error at loading data</div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default SalesFigures;
