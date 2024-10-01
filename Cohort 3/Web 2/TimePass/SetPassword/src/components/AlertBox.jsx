import React, { useState } from 'react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Switch } from "@/components/ui/switch"

function ConfirmDialog({
  isOpen,
  onClose,
  onConfirm,
  title,
  description,
}) {
  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onClose}>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={onConfirm}>Confirm</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export function StatusSwitch({ isActive, onChange }) {
  const [isConfirmationDialogOpen, setIsConfirmationDialogOpen] = useState(false)

  const handleSwitchClick = () => {
    setIsConfirmationDialogOpen(true)
  }

  const handleConfirm = () => {
    onChange(!isActive)
    setIsConfirmationDialogOpen(false)
  }

  return (
    <>
      <Switch
        checked={isActive}
        onCheckedChange={handleSwitchClick}
        className="w-10 h-5 cursor-pointer"
      />
      <ConfirmDialog
        isOpen={isConfirmationDialogOpen}
        onClose={() => setIsConfirmationDialogOpen(false)}
        onConfirm={handleConfirm}
        title={`${isActive ? 'Deactivate' : 'Activate'} Application`}
        description={`Are you sure you want to ${isActive ? 'deactivate' : 'activate'} this application?`}
      />
    </>
  )
}
