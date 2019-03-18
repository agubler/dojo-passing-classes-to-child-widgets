import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import Themed, { theme } from '@dojo/framework/widget-core/mixins/Themed';
import { tsx } from '@dojo/framework/widget-core/tsx';

import * as css from './childWidget.m.css';

@theme(css)
export default class MyChildWidget extends Themed(WidgetBase) {
	protected render() {
		return <div classes={[this.theme(css.root)]}>Hello Themed World</div>;
	}
}

