import React from 'react'
import TableLink from '@/components/TableLink'


const columnsEpisodes = [
  {
    title: 'ID',
    dataIndex: 'id',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    render: (item, record) => <TableLink item={item} record={record} from="episodes" />,
  },
  {
    title: 'Create date',
    dataIndex: 'airDate',
  },
  {
    title: 'Episode',
    dataIndex: 'episode',
  },
]

const columnsLocations = [
  {
    title: 'ID',
    dataIndex: 'id',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    render: (item, record) => <TableLink item={item} record={record} from="locations" />,
  },
  {
    title: 'Type',
    dataIndex: 'type',
  },
  {
    title: 'Dimension',
    dataIndex: 'dimension',
  },
]
const columnsCharacters = [
  {
    title: 'ID',
    dataIndex: 'id',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    render: (item, record) => <TableLink item={item} record={record} from="characters" />,
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
  },
  {
    title: 'Species',
    dataIndex: 'species',
  },
  {
    title: 'Status',
    dataIndex: 'status',
  },
  {
    title: 'Type',
    dataIndex: 'type',
  },
]

const tableInterface = {
  columnsEpisodes,
  columnsLocations,
  columnsCharacters,
}

export default tableInterface
