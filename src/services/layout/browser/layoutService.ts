import { refineServiceDecorator } from '@/instantiation/instantiation';
import { ILayoutService } from '../../../layout/browser/layoutService';

export const IWorkbenchLayoutService = refineServiceDecorator<ILayoutService, IWorkbenchLayoutService>(ILayoutService);

export interface IWorkbenchLayoutService extends ILayoutService {
	readonly _serviceBrand: undefined;
	updateWindowMaximizedState(maximized: boolean): void;
}
