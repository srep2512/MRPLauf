package org.brandt.mrplauf.entities;

import javax.persistence.Entity;
import javax.persistence.ForeignKey;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;

@Entity
public class Produktionsauftrag {
	
	@Id
	int ID;
	String Name;
	int Menge;
	
	@ManyToOne	
	Arbeitsplan ap;

	public Produktionsauftrag() {}
	public Produktionsauftrag(int ID, String Name, int Menge, Arbeitsplan ap) {
		 this.ID = ID;
		 this.Name = Name;
		 this.Menge = Menge;
		 this.ap = ap;
	}
	
	public int getID() {
		return ID;
	}

	public void setID(int iD) {
		ID = iD;
	}

	public String getName() {
		return Name;
	}

	public void setName(String name) {
		Name = name;
	}

	public int getMenge() {
		return Menge;
	}

	public void setMenge(int menge) {
		Menge = menge;
	}

	public Arbeitsplan getAp() {
		return ap;
	}

	public void setAp(Arbeitsplan ap) {
		this.ap = ap;
	}
	
}