<template>
  <div id="app">
    <vue-table
      :tbody-data="products"
      :headers="headers"
      :custom-options="customOptions"
      :style-wrap-vue-table="styleWrapVueTable"
      :disable-cells="disableCells"
      :disable-sort-thead="disableSortThead"
      :loading="loading"
      :parent-scroll-element="parentScrollElement"
      :select-position="selectPosition"
      v-on:tbody-change-data="changeData"
      v-on:tbody-submenu-click-change-color="changeColorTbody"
      v-on:tbody-submenu-click-change-value="changeValueTbody"
      v-on:thead-submenu-click-change-color="changeColorThead"
      v-on:thead-submenu-click-change-value="changeValueThead"
      v-on:thead-td-sort="sortProduct">
    <div slot="header">
      3.0 Справочник
    </div>
    <div slot="loader">
      Loader
    </div>
    </vue-table>

  </div>
</template>

<script>

import VueTable from 'vuejs-spreadsheet';

export default {
  name: 'app',
  data() {
    return {
      customOptions: {
        tbodyIndex: true,
        sortHeader: true,
        trad: {
          lang: 'fr',
          en: {
            select: {
              placeholder: 'Search by typing',
            },
          },
          fr: {
            select: {
              placeholder: 'Taper pour chercher',
            },
          },
        },
        newData: {
          type: 'input',
          value: '',
          active: false,
          style: {
            color: '#000',
          },
        },
        fuseOptions: {
          shouldSort: true,
          threshold: 0.2,
          location: 0,
          distance: 30,
          maxPatternLength: 64,
          minMatchCharLength: 1,
          findAllMatches: false,
          tokenize: false,
          keys: [
            'value',
          ],
        },
      },
      submenuTbody: [
        {
          type: 'button',
          value: 'change color',
          function: 'change-color',
          disabled: ['img'],
        },
        {
          type: 'button',
          value: 'change value',
          function: 'change-value',
          disabled: ['img', 'name'],
        },
      ],
      submenuThead: [
        {
          type: 'button',
          value: 'change color',
          function: 'change-color',
          disabled: '',
        },
        {
          type: 'select',
          disabled: '',
          subtitle: 'Select state:',
          selectOptions: [
            {
              value: 'new-york',
              label: 'new-york',
            },
            {
              value: 'france',
              label: 'france',
            },
          ],
          value: 'new-york',
          buttonOption: {
            value: 'change city',
            function: 'change-city',
            style: {
              display: 'block',
            },
          },
        },
        {
          type: 'button',
          value: 'change value',
          function: 'change-value',
          disabled: '',
        },
      ],
      disableCells: ['v', 'b', 'c', 'd', 'e'],
      loading: false,
      parentScrollElement: {
        attribute: 'html',
        positionTop: 0,
      },
      selectPosition: {
        top: 0,
        left: 0,
      },
      disableSortThead: ['a'],
      styleWrapVueTable: {
        fontSize: '12px',
        comment: {
          borderColor: '#696969',
          borderSize: '8px',
          widthBox: '120px',
          heightBox: '80px',
        },
      },
      headers: [
        {
          headerName: 'Пациенты',
          headerKey: 'v',
          style: {
            width: '100px',
            minWidth: '100px',
            minheight: '200px',
            color: '#000',
          },
        },
        {
          headerName: 'Заказчики',
          headerKey: 'b',
          style: {
            width: '100px',
            minWidth: '100px',
            color: '#000',
          },
        },
        {
          headerName: 'Исполнители',
          headerKey: 'c',
          style: {
            width: '120px',
            minWidth: '120px',
            color: '#000',
          },
        },
        {
          headerName: 'Прейскурант Заказчика',
          headerKey: 'd',
          style: {
            width: '130px',
            minWidth: '130px',
            color: '#000',
          },
        },
        {
          headerName: 'Прейскурант исполнителя',
          headerKey: 'e',
          style: {
            width: '130px',
            minWidth: '130px',
            color: '#000',
          },
        },
        {
          headerName: 'Лаборатория Исполнителя',
          headerKey: 'f',
          style: {
            width: '130px',
            minWidth: '130px',
            color: '#000',
          },
        },
        {
          headerName: 'Результаты',
          headerKey: 'g',
          style: {
            width: '110px',
            minWidth: '110px',
            color: '#000',
          },
        },
        {
          headerName: 'Курьры',
          headerKey: 'h',
          style: {
            width: '100px',
            minWidth: '100px',
            color: '#000',
          },
        },
        {
          headerName: 'Производственный календарь',
          headerKey: 'j',
          style: {
            width: '150px',
            minWidth: '150px',
            color: '#000',
          },
        },
        {
          headerName: 'Сотрудники',
          headerKey: 'k',
          style: {
            width: '110px',
            minWidth: '110px',
            color: '#000',
          },
        },
        {
          headerName: 'Скидки',
          headerKey: 'l',
          style: {
            width: '100px',
            minWidth: '100px',
            color: '#000',
          },
        },
      ],
      products: [
        {
          a: {
            type: 'input',
            value: 'Paris',
            active: false,
            style: {
              color: '#000',
            },
          },
          c: {
            type: 'input',
            value: 'Paris',
            active: false,
            style: {
              color: '#000',
            },
          },
          d: {
            type: 'input',
            value: 'France',
            active: false,
            style: {
              color: '#000',
            },
          },
          e: {
            type: 'input',
            value: 'Boe',
            active: false,
            style: {
              color: '#000',
            },
          },
          f: {
            type: 'select',
            handleSearch: true,
            selectOptions: [
              {
                value: 'Harry Potter',
                label: 'harry potter',
              },
              {
                value: 'Hermione Granger',
                label: 'hermione granger',
              },
              {
                value: 'Ron Whisley',
                label: 'ron whisley',
              },
              {
                value: 'Dobby',
                label: 'dobby',
              },
              {
                value: 'Hagrid',
                label: 'hagrid',
              },
              {
                value: 'Professeur Rogue',
                label: 'professeur rogue',
              },
              {
                value: 'Professeur Mcgonagal',
                label: 'professeur mcgonagal',
              },
              {
                value: 'Professeur Dumbledor',
                label: 'professeur dumbledor',
              },
            ],
            value: 'professeur dumbledor',
            active: false,
          },
          g: {
            type: 'select',
            handleSearch: true,
            selectOptions: [
              {
                value: 1980,
                label: 1980,
              },
              {
                value: 1981,
                label: 1981,
              },
              {
                value: 1982,
                label: 1982,
              },
              {
                value: 1983,
                label: 1983,
                active: true,
              },
              {
                value: 1984,
                label: 1984,
              },
            ],
            value: 1983,
            active: false,
          },
        },
      ],
    };
  },
  components: {
    VueTable,
  },
  mounted() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 300);
  },
  methods: {
    changeData(row, header) {
      console.log(row, header);
    },
    sortProduct(event, header, colIndex) {
      console.log('sort product');
    },
    // callback
    changeColorThead(event, header, colIndex) {
      this.headers[colIndex].style.color = '#e40000';
    },
    changeColorTbody(event, header, rowIndex, colIndex) {
      this.products[rowIndex][header].style = {};
      this.products[rowIndex][header].style.color = '#e40000';
    },
    changeValueTbody(event, header, rowIndex, colIndex) {
      this.products[rowIndex][header].value = 'T-shirt';
    },
    changeValueThead(event, entry, colIndex) {
      this.headers[colIndex].headerName = 'T-shirt';
    },
  },
};
</script>

<style lang="scss">
::-moz-selection {
  color: #2c3e50;
  background: transparent;
}
::selection {
  color: #2c3e50;
  background: transparent;
}
.th {
  text-align: center!important;
}
.th span {
  white-space: pre-wrap!important;
  padding-left: 10px!important;
  overflow: visible!important;
}
.block__button {
  display: flex;
}
.button {
  display: block;
  padding: 5px 15px;
  background-color: #e7ecf5;
  min-width: 200px;
  text-transform: uppercase;
  margin-right: 10px;
  margin-top: 10px;
}

</style>