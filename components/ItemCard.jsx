import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { getFormattedCurrency } from '../utils/getFormattedCurrency';

import BetterLink from './BetterLink';

const Div = styled.div`
  border: 1px #eee solid;
  font-size: 14px;

  a {
    text-decoration: none;
    color: inherit;
  }

  .info {
    padding: 8px;

    .brand {
      font-weight: 500;
    }

    .name {
      color: #777;
      margin: 8px 0;
    }

    .amount {
      font-weight: 500;
    }
  }
`;

const ItemCard = ({ id, imageURL, brand, name, amount, setPriority }) => {
  return (
    <Div>
      <Link href={`collections/${id}`}>
        <Image
          src={imageURL}
          width={255}
          height={275}
          priority={setPriority}
          alt="image"
        />
        <div className="info">
          <div className="brand">{brand}</div>
          <div className="name">{name}</div>
          <div className="amount">{`₺ ${getFormattedCurrency(amount)}`}</div>
        </div>
      </Link>
    </Div>
  );
};

export default ItemCard;
