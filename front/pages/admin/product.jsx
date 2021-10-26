import React, { useCallback, useEffect, useState } from "react";
import AdminLayout from "../../components/AdminLayout";
import AdminTitle from "../../components/adminTitle";
import { useSelector, useDispatch } from "react-redux";
import { PRODUCT_TYPE_REQUEST } from "../../reducers/productType";
import { PRODUCT_LIST_REQUEST } from "../../reducers/product";
import styled from "styled-components";
import { Button, Switch, Table } from "antd";

const SearchBtnWrapper = styled.div`
  width: 100%;
  margin: 5px 0px 10px 0px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const ThumbnailBox = styled.img`
  width: 35px;
  height: 35px;
  object-fit: cover;
  border-radius: 3px;
`;

const Product = () => {
  const [selectType, setSelectType] = useState(null);

  const { types } = useSelector((state) => state.productType);
  const { products } = useSelector((state) => state.product);

  console.log(products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: PRODUCT_TYPE_REQUEST,
    });

    dispatch({
      type: PRODUCT_LIST_REQUEST,
      data: { typeId: selectType },
    });
  }, [selectType]);

  useEffect(() => {
    dispatch({
      type: PRODUCT_LIST_REQUEST,
      data: { typeId: selectType },
    });
  }, [selectType]);

  const typeBtnClickHandler = useCallback(
    (value) => {
      setSelectType(value);
    },
    [selectType]
  );

  const th = [
    {
      title: "번호",
      dataIndex: "id",
    },
    {
      title: "썸네일",
      render: (data) => <ThumbnailBox src={data.thumbnail} />,
    },
    {
      title: "상품명",
      dataIndex: "title",
    },
    {
      title: "상품유형",
      render: (data) => <p>{data.ProductType.value}</p>,
    },
    {
      title: "판매가",
      dataIndex: "price",
    },
    {
      title: "할인율",
      dataIndex: "discount",
    },
    {
      title: "상단노출",
      render: (data) => <Switch defaultChecked={data.isTop} />,
    },
  ];

  return (
    <AdminLayout>
      <AdminTitle title="상품 관리" />
      <SearchBtnWrapper>
        <Button
          type={selectType === null ? "primary" : "default"}
          size="small"
          onClick={() => typeBtnClickHandler(null)}
        >
          전체
        </Button>
        {types.map((data) => {
          return (
            <Button
              key={data.id}
              // 반복문을 쓰면 key가 필요함
              type={selectType === data.id ? "primary" : "default"}
              size="small"
              onClick={() => typeBtnClickHandler(data.id)}
            >
              {data.value}
            </Button>
          );
        })}
      </SearchBtnWrapper>
      <Table rowKey="id" columns={th} size="small" dataSource={products} />
    </AdminLayout>
  );
};

export default Product;
