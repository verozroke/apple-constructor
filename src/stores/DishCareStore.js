import { defineStore } from "pinia";

export const useDishCareStore = defineStore('dishCareStore', {
    state: () => ({
        ST: {
            title: 'Home care. Средства для мытья посуды и по уходу за домом',
            status: 'Золотой Продавец',
            conditions: `Собери полку из PSKU, соблюдая стратегию категорий, логику выкладки товаров на полке по SBD стандартам`,
            description: `У тебя в наличии весь ассортимент товаров нашего портфеля из категорий Средства для мытья посуды (Fairy, Миф) и ассортимент из PSKU листа из категорий Средства для ухода за домом (Proper). Необходимо из нее отсортировать PSKU лист для данного типа торговой точки.  
            Все SKU представлены в одном фейсе, вы можете увеличивать фейсы двойным кликом мыши (наведи на SKU и 2 раза кликни левой кнопкой мыши).`
        },
        MT: {
            title: 'Home care. Средства для мытья посуды и по уходу за домом',
            status: 'Золотой Продавец',
            conditions: `Собери полку из PSKU, соблюдая стратегию категорий, логику выкладки товаров на полке по SBD стандартам`,
            description: `У тебя в наличии весь ассортимент товаров нашего портфеля из категорий Средства для мытья посуды (Fairy, Миф) и ассортимент из PSKU листа из категорий Средства для ухода за домом (Proper). Необходимо из нее отсортировать PSKU лист для данного типа торговой точки.  
            Все SKU представлены в одном фейсе, вы можете увеличивать фейсы двойным кликом мыши (наведи на SKU и 2 раза кликни левой кнопкой мыши).`,
        },
        OMA: {
            title: 'Home care. Средства для мытья посуды и по уходу за домом',
            status: 'Золотой Продавец',
            conditions: `omaomaomaomaСобери полку из PSKU, соблюдая стратегию категорий, логику выкладки товаров на полке по SBD стандартам`,
            description: `У тебя в наличии весь ассортимент товаров нашего портфеля из категорий Средства для мытья посуды (Fairy, Миф) и ассортимент из PSKU листа из категорий Средства для ухода за домом (Proper). Необходимо из нее отсортировать PSKU лист для данного типа торговой точки.  
            Все SKU представлены в одном фейсе, вы можете увеличивать фейсы двойным кликом мыши (наведи на SKU и 2 раза кликни левой кнопкой мыши).`,
        },
        X2: {
            title: 'Home care. Средства для мытья посуды и по уходу за домом',
            status: 'Золотой Продавец',
            conditions: `Собери полку из PSKU, соблюдая стратегию категорий, логику выкладки товаров на полке по SBD стандартам`,
            description: `У тебя в наличии весь ассортимент товаров нашего портфеля из категорий Средства для мытья посуды (Fairy, Миф) и ассортимент из PSKU листа из категорий Средства для ухода за домом (Proper). Необходимо из нее отсортировать PSKU лист для данного типа торговой точки.  
            Все SKU представлены в одном фейсе, вы можете увеличивать фейсы двойным кликом мыши (наведи на SKU и 2 раза кликни левой кнопкой мыши).`,
        },
        imgs: [
            {id: 1, src: './categories/dishCare/1.png', isWide: false},
            {id: 2, src: './categories/dishCare/2.png', isWide: false},
            {id: 3, src: './categories/dishCare/3.png', isWide: false},
            {id: 4, src: './categories/dishCare/4.png', isWide: false},
            {id: 5, src: './categories/dishCare/5.png', isWide: false},
            {id: 6, src: './categories/dishCare/6.png', isWide: false},
            {id: 7, src: './categories/dishCare/7.png', isWide: false},
            {id: 8, src: './categories/dishCare/8.png', isWide: false},
            {id: 9, src: './categories/dishCare/9.png', isWide: false},
            {id: 10, src: './categories/dishCare/10.png', isWide: false},
            {id: 11, src: './categories/dishCare/11.png', isWide: false},
            {id: 12, src: './categories/dishCare/12.png', isWide: false},
            {id: 13, src: './categories/dishCare/13.png', isWide: false},
            {id: 14, src: './categories/dishCare/14.png', isWide: false},
            {id: 15, src: './categories/dishCare/15.png', isWide: false},
            {id: 16, src: './categories/dishCare/16.png', isWide: false},
            {id: 17, src: './categories/dishCare/17.png', isWide: false},
            {id: 18, src: './categories/dishCare/18.png', isWide: false},
            {id: 19, src: './categories/dishCare/19.png', isWide: false},
            {id: 20, src: './categories/dishCare/20.png', isWide: false},
            {id: 21, src: './categories/dishCare/21.png', isWide: false},
            {id: 22, src: './categories/dishCare/22.png', isWide: false},
            {id: 23, src: './categories/dishCare/23.png', isWide: false},
            {id: 24, src: './categories/dishCare/24.png', isWide: false},
            {id: 25, src: './categories/dishCare/25.png', isWide: false},
            {id: 26, src: './categories/dishCare/26.png', isWide: false},
            {id: 27, src: './categories/dishCare/27.png', isWide: false},
            {id: 28, src: './categories/dishCare/28.png', isWide: false},
            {id: 29, src: './categories/dishCare/29.png', isWide: false},
            {id: 30, src: './categories/dishCare/30.png', isWide: false},
            {id: 31, src: './categories/dishCare/31.png', isWide: false},
            {id: 32, src: './categories/dishCare/32.png', isWide: false},
            {id: 33, src: './categories/dishCare/33.png', isWide: false},
            {id: 34, src: './categories/dishCare/34.png', isWide: false},
            {id: 35, src: './categories/dishCare/35.png', isWide: false},
            {id: 36, src: './categories/dishCare/36.png', isWide: false},
            {id: 37, src: './categories/dishCare/37.png', isWide: false},
            {id: 38, src: './categories/dishCare/38.png', isWide: false},
            {id: 39, src: './categories/dishCare/39.png', isWide: false},
            {id: 40, src: './categories/dishCare/40.png', isWide: true},
            {id: 41, src: './categories/dishCare/41.png', isWide: true},
            {id: 42, src: './categories/dishCare/42.png', isWide: true},
            {id: 43, src: './categories/dishCare/43.png', isWide: true},
            {id: 44, src: './categories/dishCare/44.png', isWide: true},
            {id: 45, src: './categories/dishCare/45.png', isWide: true},
            {id: 46, src: './categories/dishCare/46.png', isWide: true},
            {id: 47, src: './categories/dishCare/47.png', isWide: true},

        ]
    })
})  