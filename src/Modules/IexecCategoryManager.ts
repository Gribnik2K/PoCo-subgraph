import {
	CreateCategory as CreateCategoryEvent,
} from '../../generated/Core/IexecInterfaceToken'

import {
	Category
} from '../../generated/schema'

export function handleCreateCategory(event: CreateCategoryEvent): void
{
	let category = new Category(event.params.catid.toString())
	category.name             = event.params.name
	category.description      = event.params.description
	category.workClockTimeRef = event.params.workClockTimeRef
	category.save()
}
