import React from "react";

function AlternateWaytoHandle({ params }: { params: { todoId: string[] } }) {
  return (
    <div>Alternate Way to Handle Catch all [[…slug]]. {params.todoId} </div>
  );
}

export default AlternateWaytoHandle;
