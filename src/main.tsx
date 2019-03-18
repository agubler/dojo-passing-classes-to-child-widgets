import renderer from '@dojo/framework/widget-core/vdom';
import { tsx } from '@dojo/framework/widget-core/tsx';
import MyParentWidget from './MyParentWidget';

import * as css from './overrides.m.css';

const classes = {
	'pass-custom-classes-to-children/childWidget': {
		root: [ css.customRoot ]
	}
};

const r = renderer(() => <MyParentWidget classes={classes}/>);
r.mount();
