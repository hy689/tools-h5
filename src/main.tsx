import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import { renderWithQiankun, qiankunWindow, QiankunProps } from 'vite-plugin-qiankun/dist/helper';

import router from './routes'
import './main.css'
import StoreProvider from './store/context';


function render(props: any) {
  
  const { container } = props;
  createRoot(container? container.querySelector('#root') : document.getElementById('root')!).render(
    <StrictMode>
      <StoreProvider>
        <RouterProvider router={router} />
      </StoreProvider>
    </StrictMode>,
  )
}

renderWithQiankun({
  mount(props) {
    console.log('mount',props);
    window.$router = props.mainRouter
    render(props);
  },
  bootstrap() {
    console.log('bootstrap');
  },
  unmount(props: any) {
    console.log('unmount');
    // const { container } = props;
    // const mountRoot = container?.querySelector('#root');
    // ReactDOM.unmountComponentAtNode(
    //   mountRoot || document.querySelector('#root')
    // );
  }
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({})
}



