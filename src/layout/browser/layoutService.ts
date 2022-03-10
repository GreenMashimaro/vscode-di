import { createDecorator } from '../../instantiation/instantiation';

export const ILayoutService = createDecorator<ILayoutService>('layoutService');

export interface ILayoutService {

	/**
	 * Focus the primary component of the container.
	 */
	focus(): void;
}
