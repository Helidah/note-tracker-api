class AddImageUrlToNotes < ActiveRecord::Migration[7.0]
  def change
    add_column :notes, :note_url, :string
  end
end
