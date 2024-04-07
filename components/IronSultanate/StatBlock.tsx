import * as React from 'react';
import { DataTable } from 'react-native-paper';

interface stats {
    move: string,
    ranged: string,
    melee: string,
    armour: number,
    base: string, 
}

const StatBlock: React.FC<stats> = ({
    move, ranged, melee, armour, base
}) => {

    const [page, setPage] = React.useState<number>(0);
    const [numberOfItemsPerPageList] = React.useState([1]);
    const [itemsPerPage, onItemsPerPageChange] = React.useState(
      numberOfItemsPerPageList[0]
    );

    
  const [items] = React.useState([
    {
      key: 1,
    },
   ]);
 
   const from = page * itemsPerPage;
   const to = Math.min((page + 1) * itemsPerPage, items.length);
 
   React.useEffect(() => {
     setPage(0);
   }, [itemsPerPage]);

  return (
    <DataTable style={{width: '100%', justifyContent: 'center'}}>
        <DataTable.Header> 
            <DataTable.Title style={{flex: 2}}>Movement</DataTable.Title> 
            <DataTable.Title>Ranged</DataTable.Title> 
            <DataTable.Title>Melee</DataTable.Title> 
            <DataTable.Title>Armour</DataTable.Title> 
            <DataTable.Title>Base</DataTable.Title> 
        </DataTable.Header> 
        {items.slice(from, to).map((item) => (
        <DataTable.Row key={item.key}>
            <DataTable.Cell style={{flex: 2}}>{move}</DataTable.Cell> 
            <DataTable.Cell>{ranged}</DataTable.Cell> 
            <DataTable.Cell>{melee}</DataTable.Cell>
            <DataTable.Cell>{armour}</DataTable.Cell>
            <DataTable.Cell>{base}</DataTable.Cell>
        </DataTable.Row>
        ))}
    <DataTable.Pagination
    page={page}
    numberOfPages={Math.ceil(items.length / itemsPerPage)}
    onPageChange={(page) => setPage(page)}
    label={`${from + 1}-${to} of ${items.length}`}
    numberOfItemsPerPageList={numberOfItemsPerPageList}
    numberOfItemsPerPage={itemsPerPage}
    onItemsPerPageChange={onItemsPerPageChange}
    showFastPaginationControls
    // selectPageDropdownLabel={'Rows per page'}
  />
</DataTable>

  );
};

export default StatBlock;