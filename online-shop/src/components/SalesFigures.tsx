import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CategorySale from "../interfaces/CategorySale";
import { readSales } from "../store/actions/salesFiguresActions";
import "../styles/styles.scss";

function SalesFigures() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(readSales());
  }, [dispatch]);

  const salesList: any = useSelector((state: any) => state.salesFigures);

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
        <HighchartsReact highcharts={Highcharts} options={barOptions} />
        <HighchartsReact highcharts={Highcharts} options={pieOptions} />
      </div>
    </div>
  );
}

export default SalesFigures;
