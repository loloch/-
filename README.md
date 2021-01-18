This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).



此项目是为后台管理系统所搭建的标准工程；

后台管理系统功能通常为数据的增删改查，各业务模块之间包含大量重复的功能逻辑；普遍的页面样式为 查询条件 + 分页数据表格，功能基本包含新建数据，编辑数据，删除数据；若不将功能模块封装，会造成各开发人员对业务逻辑外的功能逻辑造成大量的重复开发；

本项目功能使用react(v16.8以上)+webpack(v5.0)+antd(v4.0)版本进行搭建，使用react最新提供的hooks进行封装，对查询条件，分页表格组件进行封装，使得可以进行配置化开发。

封装组件路径 src/component/  FormRender(查询条件) + PaginationTable(分页组件) + SearchPage(整合页面)

案例路径 src/container/PapersManagement/User/index.js
