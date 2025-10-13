import type { TreeNode } from '../../utils/TreeNode'

export function checkTree(root: TreeNode | null): boolean {
  return root?.val === (root?.left?.val ?? 0) + (root?.right?.val ?? 0)
}
