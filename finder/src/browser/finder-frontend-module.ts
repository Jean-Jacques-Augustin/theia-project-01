import { ContainerModule } from '@theia/core/shared/inversify';
import { FinderWidget } from './finder-widget';
import { FinderContribution } from './finder-contribution';
import { bindViewContribution, FrontendApplicationContribution, WidgetFactory } from '@theia/core/lib/browser';

import '../../src/browser/style/index.css';

export default new ContainerModule(bind => {
    bindViewContribution(bind, FinderContribution);
    bind(FrontendApplicationContribution).toService(FinderContribution);
    bind(FinderWidget).toSelf();
    bind(WidgetFactory).toDynamicValue(ctx => ({
        id: FinderWidget.ID,
        createWidget: () => ctx.container.get<FinderWidget>(FinderWidget)
    })).inSingletonScope();
});
