import PurchaseHistoryTable from "./PurchaseHistoryTable";
import { render, screen } from '@testing-library/react';

test('render table with data', () => {
  const purchaseHistory = [
    {"id":1,"location":"https://picsum.photos/id/0/200","purchaseDate":"2020-12-27T00:00:00.000Z","category":"Food","description":"connecting the card won&#x27;t do anything, we need to back up the digital HDD driver!","price":99882,"name":"auxiliary generating microchip"},
    {"id":2,"location":"https://picsum.photos/id/1/200","purchaseDate":"2020-12-28T00:00:00.000Z","category":"Technology","description":"I&#x27;ll synthesize the primary SMTP firewall, that should monitor the ADP feed!","price":69706,"name":"1080p backing up port"},
    {"id":3,"location":"https://picsum.photos/id/2/200","purchaseDate":"2020-12-29T00:00:00.000Z","category":"Footwear","description":"You can&#x27;t reboot the feed without transmitting the back-end SMS pixel!","price":8307,"name":"auxiliary generating panel"},
    {"id":4,"location":"https://picsum.photos/id/3/200","purchaseDate":"2020-12-30T00:00:00.000Z","category":"Travel","description":"We need to navigate the neural HTTP transmitter!","price":65580,"name":"neural connecting microchip"}
  ]
  render(<PurchaseHistoryTable purchaseHistory={purchaseHistory} />);
  screen.getByText('Food')
  screen.getByText('December 27, 2020')
  screen.getByText('connecting the card won&#x27;t do anything, we need to back up the digital HDD driver!')
  screen.getByText('$99,882.00')
  screen.getByText('auxiliary generating microchip')
  expect(screen.getByAltText('location-1')).toHaveAttribute('src', 'https://picsum.photos/id/0/200')
});
