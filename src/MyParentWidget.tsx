import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import Themed, { theme } from '@dojo/framework/widget-core/mixins/Themed';
import { tsx } from '@dojo/framework/widget-core/tsx';

import MyChildWidget from './MyChildWidget';
import * as css from './parentWidget.m.css';

@theme(css)
export default class MyParentWidget extends Themed(WidgetBase) {
	protected render() {
		const { classes } = this.properties;
		return (
			<div classes={[this.theme(css.root)]}>
				<MyChildWidget classes={classes}/>
			</div>
		);
	}
}

